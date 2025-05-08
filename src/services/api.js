const API_URL = 'http://localhost:3010';

export const getProducts = async (filters = {}) => {
    try {
        const queryParams = new URLSearchParams();

        const page = filters.page || 1;
        const limit = filters.limit || 12;
        queryParams.append('_page', page);
        queryParams.append('_limit', limit);

        const response = await fetch(`${API_URL}/products?${queryParams}`);

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        const products = await response.json();

        let filteredProducts = [...products];

        if (filters.tagSearch) {
            const searchTerm = filters.tagSearch.toLowerCase();
            filteredProducts = filteredProducts.filter(product =>
                product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        }

        if (filters.price && !isNaN(parseFloat(filters.price))) {
            const maxPrice = parseFloat(filters.price);
            filteredProducts = filteredProducts.filter(product =>
                product.price <= maxPrice
            );
        }

        if (filters.subscription !== undefined) {
            filteredProducts = filteredProducts.filter(product =>
                product.subscription === filters.subscription
            );
        }

        return {
            products: filteredProducts,
            totalCount: filteredProducts.length,
            totalPages: Math.ceil(filteredProducts.length / limit) || 1
        };
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};