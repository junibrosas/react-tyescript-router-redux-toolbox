import * as React from 'react';

import { Button } from 'react-toolbox/lib/button';
import { Input } from 'react-toolbox/lib/input';
import { FontIcon } from 'react-toolbox/lib/font_icon';
import Fill from '../../../helpers/fill';

interface Props {
    section: Object
}
interface States {}

// TODO:: refactor into components
class SectionContainer extends React.Component<Props, States>{
    
    handleDetailsChange(name: string, value: any){
        let section = this.props.section;

        console.log(Fill(name, value, section));


        this.props.dispatch('FAQ_CHANGE_TITLE', 'Work');
    }   

    handleChange(){

    }

    render(){
        const { section } = this.props; 

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Input type='text' label="Title" value={ section.title } onChange={ this.handleDetailsChange.bind(this, 'title') }/>
                        <Input type='text' label="Introduction" value={ section.introduction } onChange={ this.handleDetailsChange.bind(this, 'introduction') }/>
                    </div>
                </div>
                <div style={ { borderBottom: "1px solid #dbdbdb", margin: "50px 0" } }></div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="pull-left">
                            <h5>Section 1</h5>
                        </div>
                        <div className="pull-right">
                            <ul className="list-inline">
                                <li><Button icon="add" label="Instructions" raised /></li>
                                <li><Button icon="add" label="Bulleted List" raised /></li>
                                <li><FontIcon value="keyboard_arrow_up"></FontIcon></li>
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="col-md-12">
                        <Input type='text' label='Subtitle' value="text here" onChange={ this.handleChange.bind(this) }/>
                        <Input type='text' label='Body' value="text here" onChange={ this.handleChange.bind(this) }/>
                        <Input type='text' label='Note' value="text here" onChange={ this.handleChange.bind(this) }/>
                    </div>
                </div>

                <Button icon="add" label="Section" raised />
            </div>
        );
    }
}

export default SectionContainer;