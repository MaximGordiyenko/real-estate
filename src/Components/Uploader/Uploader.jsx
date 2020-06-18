import React, {Component} from 'react';

class Uploader extends Component {
  state = {
    selectedFile: null,
    imagePreviewUrl: null,
    data: null,
    images: []
  };


  componentDidMount = () => {
    this.getImageData();
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.fileUpload(this.state.selectedFile);
  }

  onChange = (e) => {
    this.setState({
        selectedFile: e.target.files[0]
      },
      () => {
        console.log(this.state.selectedFile)
      });

    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(e.target.files[0])
  };

  getImageData = () => {
    const url = "http://localhost:3000/uploader";
    console.log("url:", url);

    fetch(url, {
      method: "GET",
    })
      .then(response => {
        if (response.ok) return response.json();
        // throw new Error('Request failed.');
        return [];
      })
      .then(data => {
        console.log("data:", data);
        this.setState({images: data});
      });
  };


  fileUpload = (file) => {
    const url = "http://localhost:3000/uploader";
    const formData = new FormData();
    formData.append('file', file)

    fetch(url, {
      mode: 'no-cors',
      method: "POST",
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: formData
    }).then(res => {
      console.log("res fileUpload: ", res);
      this.getImageData();
    }).catch(err => {
      // Do something for an error here
      console.log("Error Reading data " + err);
    });
  };

  render() {
    let imagePreview = (<div className="previewText image-container">Please select an Image for Preview</div>);
    if (this.state.imagePreviewUrl) {
      imagePreview = (
        <div className="image-container"><img src={this.state.imagePreviewUrl} alt="icon" width="200"/></div>);
    }

    return (
      <section className="section">
            <label className="file-label">
              <input className="file-input"
                     type="file"
                     name="file"
                     onChange={this.onChange}
              />
            </label>
          <br/>
          <button onClick={this.onFormSubmit}
                  type="submit">Upload
          </button>
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