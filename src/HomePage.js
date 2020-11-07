import React, { useContext } from 'react'
import { SHOES } from "./SHOES";
import Preview from './Preview';
import { CardColumns } from "react-bootstrap";
import { MyContext } from "./context";

const HomePage = () => {
    
    const  { DATA }  = useContext(MyContext)

    return (
        <CardColumns>
            {DATA.map(({ id, ...otherProps }) => <Preview key={id} id={id} {...otherProps}/>)}
        </CardColumns>
    )
}

export default HomePage
