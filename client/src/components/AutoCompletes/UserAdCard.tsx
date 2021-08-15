import {Button, Card, CardActionArea, CardContent, Paper} from "@material-ui/core";
import React from "react";
import Carousel from 'react-material-ui-carousel'

const UserAdCard = () => {
   const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
    return (
        <Card>
            <CardActionArea onClick={() => {console.log('клик')}}>
                <CardContent>
                    <div className="mb-3" style={{textAlign:'left'}}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <Carousel>
                                    {
                                        items.map( (item, i) => <img width={200} src="https://avatars.mds.yandex.net/get-autoru-vos/1711983/4c3361bade11d7b9fbd81257ab3f19e3/1200x900n" className="card-img" /> )
                                    }
                                </Carousel>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}


export default UserAdCard;