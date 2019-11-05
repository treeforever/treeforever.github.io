import * as React from "react";

import { Category, Categories, AllCategories } from '../types'

const style = {
    height: '100%',
    width: '100%',
}

const CategoryItem = ({ name, count, selectedCategory, onClick }: { name: AllCategories, count: number, selectedCategory: boolean, onClick: (category: AllCategories) => void }) =>
    <li style={{ padding: '1rem 0' }}>
        <button style={{ border: 'none', padding: 0, fontWeight: selectedCategory ? 700 : 500 }} onClick={() => onClick(name)}>
            <span className="category-name">{name}</span>
            {' '}
            <span className="category-count">({count})</span>
        </button>
    </li>

export default ({ categories, selectedCategory, onCategoryClick }:
    { categories: Categories, selectedCategory: AllCategories, onCategoryClick: (category: Category) => void }) => (
    <>
        <div style={style}>
            <ul style={{ 'listStyle': 'none', padding: '0 3rem' }}>
                {categories.map(category =>
                    <CategoryItem
                        key={category.name}
                        name={category.name}
                        count={category.count}
                        onClick={onCategoryClick}
                        selectedCategory={selectedCategory === name} />
                )}
            </ul>
        </div>
    </>
)