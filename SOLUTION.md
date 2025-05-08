# SOLUTION

### Estimation

- Initial planning and repository setup: 0.5 hour
- Component architecture design: 1.5 hours
- API service implementation: 1 hour
- UI implementation (filters, product table, pagination): 2.5 hours
- Styling and responsive design: 2 hours
- Testing and bug fixes: 2 hours
- Documentation: 0.5 hour

**Total estimated time**: 10 hours

### Actual time spent

- Initial planning and repository setup: 0.5 hours
- Component architecture design: 1 hour
- API service implementation: 0.7 hour
- UI implementation (filters, product table, pagination): 2.3 hours
- Styling and responsive design: 1.3 hours
- Testing and bug fixes: 1.7 hours
- Documentation: 0.2 hours

**Total actual time**: 8 hours

### Test cases

1. **Initial Page Load**

   ```gherkin
   Feature: Product Collection Page
   
   Scenario: View all products when page first loads
     Given I visit the product collection page
     Then I should see a filters sidebar on the left
     And I should see a table of products on the right
     And I should see exactly 12 products in the table
     And I should see pagination controls at the bottom of the table
   ```

2. **Filtering by Tag**

   ```gherkin
   Feature: Product Filtering
   
   Scenario: Filter products by Dog tag
     Given I am on the product collection page
     When I type "Dog" in the Search Tags input field
     Then I should see the products table update automatically
     And I should see exactly 11 products in the resulting table
     And all visible products should have the "Dog" tag
   ```

3. **Filtering by Price**

   ```gherkin
   Feature: Product Filtering
   
   Scenario: Filter products by maximum price
     Given I am on the product collection page
     When I enter "30" in the Max Price input field
     Then I should see the products table update automatically
     And I should see exactly 1 product in the resulting table
     And the visible product should have a price less than or equal to 30
   ```

4. **Combined Filtering**

   ```gherkin
   Feature: Product Filtering
   
   Scenario: Filter products by subscription status and tag
     Given I am on the product collection page
     When I select "Yes" from the Subscription dropdown
     And I type "Cat" in the Search Tags input field
     Then I should see the products table update automatically
     And I should see exactly 5 products in the resulting table
     And all visible products should have subscription enabled
     And all visible products should have the "Cat" tag
   ```

5. **Edge Case: No Results**

   ```gherkin
   Feature: Product Filtering
   
   Scenario: No products match the filter criteria
     Given I am on the product collection page
     When I type "Nonexistent" in the Search Tags input field
     Then I should see a message indicating no products were found
     And I should see a button to reset the filters
   ```

### Edge Cases Handled

1. **Empty Results**: When no products match the filter criteria, a friendly message is displayed instead of an empty table.

2. **Invalid Filter Values**: The application validates filter inputs and handles invalid values gracefully.

3. **Loading State**: During API requests, a loading indicator is shown to provide feedback to the user.

4. **Image Loading Errors**: Placeholders are automatically generated for products with broken image links.

5. **Pagination with Filtered Results**: Pagination correctly adjusts based on the number of filtered products.

6. **Filter Reset**: Users can easily reset all filters with a single button click.

### Technical Implementation

The application was built with a focus on clean architecture, performance, and user experience:

- **Component Architecture**: Used a modular component structure with clear separation of concerns
- **State Management**: Implemented custom hooks for managing product data and filter state
- **API Integration**: Created a service layer for API communication with debounced requests
- **Responsive Design**: Ensured the UI works well on different screen sizes
- **Performance Optimization**: Implemented debouncing for search inputs to reduce API calls
- **Accessibility**: Added proper semantic HTML and aria attributes

### Improvements for Production

With more time, the following improvements could be made:

1. **Add Unit and Integration Tests**: Implement Jest and React Testing Library tests for components and features.

2. **Enhanced Filtering**: Add more advanced filtering options like range sliders for prices.

3. **Sorting Functionality**: Allow users to sort products by various attributes (price, name, etc.).

4. **Persistent Filters**: Save filter state in URL parameters or local storage for better navigation.

5. **Performance Optimizations**: Implement virtualization for large product lists and optimize bundle size.

6. **Enhanced UI Features**: Add product details view, wishlist functionality, and better animations.

7. **Backend Integration**: Replace the mock API with a real backend service.

8. **Analytics**: Add event tracking to monitor user behavior with filters.

9. **Accessibility Audit**: Conduct a thorough accessibility review and implement improvements.

10. **SEO Optimization**: Implement SEO best practices for product pages.