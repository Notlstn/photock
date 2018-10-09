import React from "react";

import Form from "./Form/Form";

import classes from "./PhotoSpace.module.scss";
import shortid from "shortid";

import { getImages } from "../../API/shibe";

class PhotoSpace extends React.Component {
    state = {
        images: [],
        selectedQuantity: null,
        selectedAnimalType: null,
        isSelected: false
    };

    randomizeType() {
        const items = ["shibes", "cats", "birds"];
        return items[Math.floor(Math.random() * items.length)];
    }

    _clearComponentState = () => {
        this.setState({
            selectedQuantity: null,
            selectedAnimalType: null,
            isSelected: false,
            images: []
        });
    };

    _searchClick = (quantity, animalType) => {
        if (animalType === "random") animalType = this.randomizeType();

        if (quantity && animalType.trim()) {
            this.setState({
                selectedQuantity: quantity,
                selectedAnimalType: animalType,
                isSelected: true
            });
        }
    };

    componentDidUpdate = () => {
        if (this.state.isSelected && this.state.images.length === 0) {
            (async () => await getImages(this.state.selectedAnimalType, this.state.selectedQuantity))().then(
                response => {
                    let data = response.map(item => {
                        return { url: item, key: shortid.generate() };
                    });
                    this.setState({
                        images: data
                    });
                }
            );
        }
    };

    render() {
        let masonry = (
            <div className={classes.Masonry_wrapper}>
                <div className={[classes.Masonry, classes.Masonry__h].join(" ")}>
                    {this.state.images.map(singleImage => {
                        return (
                            <figure
                                key={singleImage.key}
                                className={[classes.Masonry_brick, classes.Masonry_brick__h].join(" ")}
                            >
                                <img src={singleImage.url} className={classes.Masonry_img} alt={singleImage.url} />
                            </figure>
                        );
                    })}
                </div>
            </div>
        );

        return (
            <div className={classes.PhotoSpace}>
                <Form
                    handleSearchClick={this._searchClick}
                    handleClearClick={this._clearComponentState}
                    imagesLength={this.state.images.length}
                    isSelected={this.state.isSelected}
                />
                {masonry}
            </div>
        );
    }
}

export default PhotoSpace;
