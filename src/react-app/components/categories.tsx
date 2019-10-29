import * as React from "react";

const style = {
    height: '100%',
    width: '100%',
}

const CategoryItem = ({ categoryName }: { categoryName: string }) =>
    <li style={{ padding: '2rem 0' }}>{categoryName}</li>

export default () => (
    <>
        <div style={style}>
            <ul style={{ 'listStyle': 'none', padding: '0 3rem' }}>
                <CategoryItem categoryName='Sweaters' />
                <CategoryItem categoryName='Sleepwear' />
                <CategoryItem categoryName='Outerwear' />
                <CategoryItem categoryName='Dresses' />
                <CategoryItem categoryName='Pants' />
                <CategoryItem categoryName='Shoes' />
                <CategoryItem categoryName='Accessories' />
            </ul>
        </div>
    </>
)