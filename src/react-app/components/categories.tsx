import * as React from "react";

import { Categories } from '../types'

const style = {
    height: '100%',
    width: '100%',
}

const CategoryItem = ({ name, count }: { name: string, count: number }) =>
    <li style={{ padding: '2rem 0' }}>
        <span className="category-name">{name}</span>
        {' '}
        <span className="category-count">({count})</span>
    </li>

export default ({ categories }: { categories: Categories }) => (
    <>
        <div style={style}>
            <ul style={{ 'listStyle': 'none', padding: '0 3rem' }}>
                {categories.map(category =>
                    <CategoryItem key={category.name} {...category} />)}
            </ul>
        </div>
    </>
)