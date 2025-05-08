import React, { useState, useEffect } from 'react';

const FiltersSidebar = ({ filters, updateFilters }) => {
    const [tagInput, setTagInput] = useState(filters.tagSearch || '');
    const [priceInput, setPriceInput] = useState(filters.price || '');

    useEffect(() => {
        const timer = setTimeout(() => {
            if (tagInput !== filters.tagSearch) {
                updateFilters({ tagSearch: tagInput });
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [tagInput, filters.tagSearch, updateFilters]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (priceInput !== filters.price) {
                updateFilters({ price: priceInput });
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [priceInput, filters.price, updateFilters]);

    const handleSubscriptionChange = (e) => {
        const value = e.target.value;
        updateFilters({
            subscription: value === 'yes' ? true : value === 'no' ? false : undefined
        });
    };

    const resetFilters = () => {
        setTagInput('');
        setPriceInput('');
        updateFilters({
            tagSearch: '',
            price: '',
            subscription: undefined,
            page: 1
        });
    };

    return (
        <div className="filters-sidebar">
            <h2>Filters</h2>

            <div className="filter-section">
                <label>Search Tags</label>
                <input
                    type="text"
                    placeholder="e.g., Cat, Dog"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                />
            </div>

            <div className="filter-section">
                <label>Max Price</label>
                <input
                    type="number"
                    placeholder="Enter max price"
                    value={priceInput}
                    onChange={(e) => setPriceInput(e.target.value)}
                    min="0"
                    step="0.01"
                />
            </div>

            <div className="filter-section">
                <label>Subscription</label>
                <select
                    value={filters.subscription === true ? 'yes' : filters.subscription === false ? 'no' : 'all'}
                    onChange={handleSubscriptionChange}
                >
                    <option value="all">All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <button
                className="reset-filters-btn"
                onClick={resetFilters}
            >
                Reset Filters
            </button>
        </div>
    );
};

export default FiltersSidebar;