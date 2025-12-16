import React from 'react'
import { catagoryInfos } from './categoryFullInfos'
import CategoryCard from './CategoryCard'
import classes from './category.module.css'

function Category() {
    return (
        <section className={classes.category_container}>

            {catagoryInfos.map((item, index) => (
                <CategoryCard
                    key={index}
                    title={item.title}
                    imgLink={item.imgLink}
                    name={item.name} />
            ))}
        </section>
    )
}

export default Category