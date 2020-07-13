import React, {Component} from 'react';
import axios from 'axios';
import Input from "../Reusable_Components/Input/Input";
import Label from "../Reusable_Components/Label/Label";
import css from './Uploader.module.css';
import Textarea from "../Reusable_Components/Textarea/Textarea";

class Uploader extends Component {
  state = {
    file: null,
    card_id: '',
    title: '',
    description: '',
    releaseDate: "",
    location: "",
    price: "",
    trailerPath: "",
    city: "",
    address: "",
    latitude: "",
    longitude: "",
    bedrooms: "",
    bathrooms: "",
    carSpaces: "",
    favorite: "",
    imagePreviewUrl: null,
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {card_id, title, description, file, releaseDate, location, price, trailerPath, city, address, latitude, longitude, bedrooms, bathrooms, carSpaces, favorite} = this.state;

    const card = {card_id, title, description, file, releaseDate, location, price, trailerPath, city, address, latitude, longitude, bedrooms, bathrooms, carSpaces, favorite};


    const form_data = new FormData();
    for (let key in card) {
      form_data.append(key, card[key]);
    }

    axios.post(
      "http://localhost:4000/upload", form_data)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onChangeImage = (e) => {
    this.setState({
      file: e.target.files[0]
    });

    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(e.target.files[0])
  };

  onChange = (e) => {
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value,
      },
      () => {
        // console.log("state in onChange", this.state)
      });
  };

  render() {
    let imagePreview = (<div className="previewText image-container">Please select an Image for Preview</div>);
    if (this.state.imagePreviewUrl) {
      imagePreview = (
        <div className="image-container"><img src={this.state.imagePreviewUrl} alt="icon" width="200"/></div>);
    }
    console.log("state render:", this.state);
    return (
      <section className="section">
        <form action="" onSubmit={this.onSubmit} className={`${css.form}`} encType="multipart/form-data">
          <Label htmlFor={`card_id`} text={`Insert card ID`}/>
          <Input
            id={`card_id`}
            type={`number`}
            name={`card_id`}
            placeholder={`Insert card ID here`}
            onChange={this.onChange}
          />

          <Label htmlFor={`title`} text={`Input title`}/>
          <Input
            id={`title`}
            type={`text`}
            name={`title`}
            placeholder={`Input title here`}
            onChange={this.onChange}
          />

          <Label htmlFor={`description`} text={`description`}/>
          <Textarea
            id={`description`}
            type={`text`}
            name={`description`}
            placeholder={`Input description here`}
            row={5}
            col={10}
            onChange={this.onChange}
          />

          <Label htmlFor={`file`} text={`Select Image`}/>
          <Input
            id={`file`}
            type={`file`}
            name={`file`}
            onChange={this.onChangeImage}
          />

          <Label htmlFor={`releaseDate`} text={`Input releaseDate`}/>
          <Input
              id={`releaseDate`}
              type={`text`}
              name={`releaseDate`}
              placeholder={`Input releaseDate here`}
              onChange={this.onChange}
          />

          <Label htmlFor={`location`} text={`Input location`}/>
          <Input
            id={`location`}
            type={`text`}
            name={`location`}
            placeholder={`Input location here`}
            onChange={this.onChange}
          />

          <Label htmlFor={`price`} text={`Input price`}/>
          <Input
            id={`price`}
            type={`text`}
            name={`price`}
            placeholder={`Input price here`}
            onChange={this.onChange}
          />

          <Label htmlFor={`trailerPath`} text={`Input trailerPath`}/>
          <Input
            id={`trailerPath`}
            type={`text`}
            name={`trailerPath`}
            placeholder={`Input trailerPath here`}
            onChange={this.onChange}
          />

          <Label htmlFor={`city`} text={`Input city`}/>
          <Input
            id={`city`}
            type={`text`}
            name={`city`}
            placeholder={`Input city here`}
            onChange={this.onChange}
          />

          <Label htmlFor={`address`} text={`Input address`}/>
          <Input
            id={`address`}
            type={`text`}
            name={`address`}
            placeholder={`Input address here`}
            onChange={this.onChange}
          />

          <Label htmlFor={`latitude`} text={`Input latitude`}/>
          <Input
            id={`latitude`}
            type={`text`}
            name={`latitude`}
            placeholder={`Input latitude here`}
            onChange={this.onChange}
          />

          <Label htmlFor={`longitude`} text={`Input longitude`}/>
          <Input
            id={`longitude`}
            type={`text`}
            name={`longitude`}
            placeholder={`Input longitude here`}
            onChange={this.onChange}
          />

          <Label htmlFor={`bedrooms`} text={`Input bedrooms`}/>
          <Input
            id={`bedrooms`}
            type={`text`}
            name={`bedrooms`}
            placeholder={`Input bedrooms here`}
            onChange={this.onChange}
          />

          <Label htmlFor={`carSpaces`} text={`Input carSpaces`}/>
          <Input
            id={`carSpaces`}
            type={`text`}
            name={`carSpaces`}
            placeholder={`Input carSpaces here`}
            onChange={this.onChange}
          />

          <Label htmlFor={`favorite`} text={`Input favorite`}/>
          <Input
            id={`favorite`}
            type={`text`}
            name={`favorite`}
            placeholder={`Input favorite here`}
            onChange={this.onChange}
          />

          <br/>
          <button
            type="submit"
            // onClick={this.onSubmit}
          >Upload
          </button>
        </form>
        <hr/>
        <div className="container is-fluid">
          <div className="columns is-multiline">
            {imagePreview}
          </div>
        </div>
      </section>
    );
  }
}

export default Uploader;
