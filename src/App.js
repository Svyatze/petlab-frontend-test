import React from 'react';
import { useProducts } from './hooks/useProducts';
import FiltersSidebar from './components/FiltersSidebar/FiltersSidebar';
import ProductsTable from './components/ProductsTable/ProductsTable';
import Pagination from './components/Pagination/Pagination';
import './App.css';
import logo from './logo.svg';

function App() {
  const {
    products,
    loading,
    error,
    totalCount,
    totalPages,
    filters,
    updateFilters
  } = useProducts();

  return (
      <div className="App">
        <header className="App-header">
          <div className="header-container">
            <div className="logo">
              <img src={logo} alt="PetLab Co." />
            </div>
          </div>
        </header>

        <main className="App-main">
          <div className="container">
            <h1 className="page-title">Products</h1>

            {!loading && !error && (
                <div className="products-count-container">
                  <div className="products-count">
                    {products.length === 1
                        ? "1 product found"
                        : `${products.length} products found`}
                  </div>
                </div>
            )}

            <div className="product-layout">
              <div className="filters-container">
                <FiltersSidebar filters={filters} updateFilters={updateFilters} />
              </div>

              <div className="products-container">
                {loading ? (
                    <div className="loading">Loading products...</div>
                ) : error ? (
                    <div className="error">Error: {error}</div>
                ) : (
                    <>
                      <ProductsTable products={products} />

                      <Pagination
                          currentPage={filters.page}
                          totalPages={totalPages}
                          onPageChange={(page) => updateFilters({ page })}
                      />
                    </>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
  );
}

export default App;