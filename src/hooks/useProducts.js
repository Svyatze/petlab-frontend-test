import { useState, useEffect, useCallback } from 'react';
import { getProducts } from '../services/api';

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalCount, setTotalCount] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const [filters, setFilters] = useState({
        page: 1,
        limit: 12,
        tagSearch: '',
        price: '',
        subscription: undefined
    });

    const fetchProducts = useCallback(async () => {
        try {
            setLoading(true);
            const data = await getProducts(filters);
            setProducts(data.products);
            setTotalCount(data.totalCount);
            setTotalPages(data.totalPages);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [filters]);

    useEffect(() => {
        const timer = setTimeout(() => {
            void fetchProducts();
        }, 300);

        return () => clearTimeout(timer);
    }, [fetchProducts]);

    const updateFilters = useCallback((newFilters) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            ...newFilters,
            page: newFilters.page ? newFilters.page : 1
        }));
    }, []);

    return {
        products,
        loading,
        error,
        totalCount,
        totalPages,
        filters,
        updateFilters
    };
};