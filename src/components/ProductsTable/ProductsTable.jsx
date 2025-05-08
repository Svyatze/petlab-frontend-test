import React from 'react';
import { getPlaceholderImage } from '../../utils/imageUtils';

const ProductsTable = ({ products }) => {
    if (products.length === 0) {
        return (
            <div className="no-products-message">
                <p>No products match your filters. Try adjusting your search criteria.</p>
            </div>
        );
    }

    const handleImageError = (e, title) => {
        e.target.onerror = null;
        e.target.src = getPlaceholderImage(title);
    };

    const renderTagBadge = (tag) => {
        let className = 'tag-badge';

        if (tag === 'Dog') {
            className += ' tag-animal tag-dog';
        } else if (tag === 'Cat') {
            className += ' tag-animal tag-cat';
        } else if (tag === 'Chews') {
            className += ' tag-chews';
        } else if (tag === 'Formula') {
            className += ' tag-formula';
        } else if (tag === 'Shampoo') {
            className += ' tag-shampoo';
        }

        return <span key={tag} className={className}>{tag}</span>;
    };

    return (
        <div className="products-table-container">
            <table className="products-table">
                <thead>
                <tr>
                    <th className="product-col">PRODUCT</th>
                    <th className="price-col">PRICE</th>
                    <th className="subscription-col">SUBSCRIPTION</th>
                    <th className="tags-col">TAGS</th>
                </tr>
                </thead>
                <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td className="product-col">
                            <div className="product-info">
                                <div className="product-image">
                                    <img
                                        src={product.image_src}
                                        alt={product.title}
                                        onError={(e) => handleImageError(e, product.title)}
                                    />
                                </div>
                                <div className="product-details">
                                    <h3>{product.title}</h3>
                                    <p>{product.vendor}</p>
                                </div>
                            </div>
                        </td>
                        <td className="price-col">${product.price.toFixed(2)}</td>
                        <td className={`subscription-col ${product.subscription ? 'yes' : 'no'}`}>
                            {product.subscription ? 'Yes' : 'No'}
                        </td>
                        <td className="tags-col">
                            <div className="tags-container">
                                {product.tags.map(tag => renderTagBadge(tag))}
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsTable;