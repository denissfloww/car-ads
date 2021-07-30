import {Button} from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import CancelIcon from "@material-ui/icons/Cancel";
import ImageUploading, {ImageListType} from "react-images-uploading";
import React from "react";
import {useAppendPageStyles} from "../styles/muiStyles";

const ImageUploader: React.FC<{
    maxNumber: number;
    onChange:
        (imageList: ImageListType,
         addUpdateIndex: number[] | undefined) => void,
    images: never[]}> =
    ({ maxNumber, onChange, images }) => {
        const classes = useAppendPageStyles()

    return (
        <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
        >
            {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps
              }) => (
                <div className={classes.uploadForm}>
                    <Button
                        style={isDragging ? { color: "red" } : undefined}
                        variant="contained"
                        color="primary"
                        {...dragProps}
                        onClick={onImageUpload}
                    >
                        Добавить
                    </Button>
                    &nbsp;
                    <Button
                        color="secondary"
                        onClick={onImageRemoveAll}
                        variant="contained"
                    >
                        Удалить все
                    </Button>
                    <div style={{paddingTop: '1.5em'}}>
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image.dataURL} alt="" width="100" />
                                <div className="image-item__btn-wrapper">
                                    <Button onClick={() => onImageUpdate(index)}>
                                        <PublishIcon />
                                    </Button>
                                    <Button onClick={() => onImageRemove(index)} >
                                        <CancelIcon />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </ImageUploading>
    )
}

export default ImageUploader;