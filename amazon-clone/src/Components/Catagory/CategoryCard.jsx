import React from 'react'
import classes from './category.module.css'

function CategoryCard({ title, imgLink }) {
    return (
        <div className={classes.category}>
            <a href="">
                <span><h2>{title}</h2></span>
                <img src={imgLink} alt={title} />
                <p>shop now</p>
            </a>
        </div>
    )
}

export default CategoryCard