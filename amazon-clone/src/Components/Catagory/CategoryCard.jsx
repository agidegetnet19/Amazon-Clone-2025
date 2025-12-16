import React from 'react'
import classes from './category.module.css'
import { Link } from 'react-router-dom'

function CategoryCard({ title, imgLink, name }) {
    return (
        <div className={classes.category}>
            <Link to={`/category/${name}`}>
                <span><h2>{title}</h2></span>
                <img src={imgLink} alt={title} />
                <p>shop now</p>
            </Link>
        </div>
    )
}

export default CategoryCard