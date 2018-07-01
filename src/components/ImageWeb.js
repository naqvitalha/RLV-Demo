import * as React from 'react';
import { StyleSheet } from "react-native";
export class ImageWeb extends React.Component {
    constructor(props) {
        super(props);
        this.onImageLoad = this.onImageLoad.bind(this);
        this.getPlaceholderRef = this.getPlaceholderRef.bind(this);
        this.getImageRef = this.getImageRef.bind(this);
        this._hasUriChanged = true;
    }
    shouldComponentUpdate(newProps) {
        const oldSource = this.props.source;
        const newSource = newProps.source;
        const lastUri = oldSource && oldSource.uri ? oldSource.uri : undefined;
        const newUri = newSource && newSource.uri ? newSource.uri : undefined;
        if (lastUri !== newUri) {
            this._hasUriChanged = true;
        }
        return true;
    }
    onImageLoad() {
        if (this.props.onLoad) {
            this.props.onLoad();
        }
        if (this._placeholderRef) {
            this._placeholderRef.style.opacity = '0';
        }
        if (this._imageRef) {
            this._imageRef.style.transition = this.getTransitonForImage();
            this._imageRef.style.opacity = '1';
        }
        if (this.props.onLoadEnd) {
            this.props.onLoadEnd();
        }
    }
    getPlaceholderRef(placeholderRef) {
        this._placeholderRef = placeholderRef;
    }
    getImageRef(imageRef) {
        this._imageRef = imageRef;
    }
    extractPlaceholderScale(props) {
        let placeHolderScale = 1;
        const defaultSource = props.defaultSource;
        if (typeof defaultSource !== "number" && defaultSource) {
            if (defaultSource.scale > 0) {
                placeHolderScale = defaultSource.scale;
            }
        }
        return placeHolderScale;
    }
    extractPlaceholderUri(props) {
        const defaultSource = props.defaultSource;
        if (typeof defaultSource !== "number" && defaultSource) {
            if (defaultSource.uri) {
                return defaultSource.uri;
            }
        }
        return undefined;
    }
    getPlaceholderTransforms() {
        const scale = this.extractPlaceholderScale(this.props);
        return `scale(${scale},${scale})`;
    }
    getTransitonForImage() {
        return this._hasUriChanged ? undefined : 'opacity 0.3s ease-out';
    }
    getObjectFit(resizeMode) {
        let objectFit = resizeMode ? resizeMode : 'cover';
        if (objectFit === 'stretch') {
            objectFit = 'fill';
        }
        return objectFit;
    }
    render() {
        const src = this.props.source.uri;
        const placeholderSrc = this.extractPlaceholderUri(this.props);
        const transition = this.getTransitonForImage();
        const propStyles = StyleSheet.flatten(this.props.style);
        const objectFit = this.getObjectFit(this.props.resizeMode);
        let opacity = 1;
        let placeholderOpacity = 0;
        if (this._hasUriChanged) {
            opacity = 0;
            placeholderOpacity = 1;
            this._hasUriChanged = false;
        }
        return (<div style={Object.assign({}, styles.container, propStyles)}>
                {src ? <img ref={this.getImageRef} style={Object.assign({ opacity, transition, objectFit }, styles.image)} src={src} onLoad={this.onImageLoad} onError={this.props.onError}/> : undefined}
                {placeholderSrc ?
            <div style={styles.placeholderContainer}>
                        <img ref={this.getPlaceholderRef} src={placeholderSrc} style={Object.assign({}, styles.placeholderImage, { opacity: placeholderOpacity, transform: this.getPlaceholderTransforms() })}/>
                    </div>
            : undefined}
            </div>);
    }
}
const styles = {
    container: {
        display: 'flex',
        position: 'relative',
    },
    image: {
        height: "100%",
        width: "100%",
    },
    placeholderImage: {
        height: "100%",
        width: "100%",
        objectFit: 'contain'
    },
    placeholderContainer: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,
        top: 0
    }
};
export { ImageWeb as Image };
//# sourceMappingURL=ImageWeb.js.map
