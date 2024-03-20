import React, {Component} from 'react'
import Header from '../components/header'
import HomeForm from "../components/home-form";
import HomeUploadSent from '../components/home-upload-sent'
import _ from 'lodash'

class Home extends Component {

    constructor(props) {

        super(props);

        this.state = {
            componentName: 'HomeForm',
            data: null,
            uploadEvent: null,
        };
        this._renderComponent = this._renderComponent.bind(this)
    }


    _renderComponent() {

        const {componentName, data, uploadEvent} = this.state;

        switch (componentName) {


            case 'HomeUploadSent':


                return (
                    <HomeUploadSent onSendAnotherFile={() => {

                        this.setState({
                            componentName: 'HomeForm'
                        })

                    }} data={data}/>
                );


            default:
                return( <HomeForm
                    onUploadEvent={(event) => {

                        let data = this.state.data;

                        if(_.get(event, 'type') === 'success'){

                            data = _.get(event, 'payload');
                        }
                        this.setState(
                            {
                                data: data,
                                uploadEvent: event,
                                componentName: (_.get(event, 'type') === 'success') ? 'HomeUploadSent': this.state.componentName,
                            }
                        );
                    }}
                    onUploadBegin={(data) => {

                        this.setState({
                            data: data,
                            componentName: 'HomeUploading',
                        });

                    }}/>
                )
        }
    }

    render() {

        return (
          <div className="app-container flex flex-col justify-center place-content-center">
            <Header />
            <div className="app-content flex justify-center">{this._renderComponent()}</div>
          </div>
        );
    }
}


export default Home;