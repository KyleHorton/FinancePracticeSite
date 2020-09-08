import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import { GridList, GridListTile } from '@material-ui/core';
import './breweries.css';

class Breweries extends Component {
    constructor(){
        super();
        this.state = {
            breweries: [],
            breweryState: ''
        };
    }

    changeHandler = (e) => {
        this.setState({breweryState: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.componentDidMount();
    }

    componentDidMount(){
        if (this.state.breweryState !== ''){
            fetch('/breweryByCity/' + this.state.breweryState)
                .then(res => res.json())
                .then(breweries => {
                    if (breweries.length < 1){
                        console.log("yessir")
                        alert("Error! " + this.state.breweryState + " is not a valid state!")
                    } else {
                        this.setState({breweries}, () => console.log('Breweries fetched ..', breweries));
                    }
                })
        }
    }
    render(){
        return (
            <div className="appBody">
                <div>
                    <h2> Breweries </h2>
                    <form onSubmit={this.submitHandler}>
                        <label>
                            Find brewery by city: 
                            <input id="input" type="text" name="name" placeholder="Type in your state!" onChange={this.changeHandler}/>
                        </label>
                        <input type="submit" value="Submit" />
                        </form>
                </div>
                <div>
                    <GridList cols={5}
                    spacing={4}
                    cellHeight={220}
                    >
                    {this.state.breweries.map(brewery=>
                        <GridListTile  key={brewery.id} className="gridCards">
                            <Card style={{ width: '18rem', height:'11rem'}}>
                                <Card.Body>
                                    <Card.Title>{ brewery.name }</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{ brewery.type }</Card.Subtitle>
                                    <Card.Text> {brewery.city}, {brewery.state}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ width: '18rem', position: 'absolute', bottom:'0', fontSize: '14px'}}>
                                        <Card.Link target="_blank" href={brewery.website_url}>{brewery.website_url}</Card.Link>
                                </Card.Footer>
                            </Card>
                        </GridListTile>
                    )}
                    </GridList>
                </div>
            </div>
        );
    }
}

export default Breweries;
