import React from 'react';
import CategoryList from './add-category-list/add-category-list';

function BuildForm(props) {
  const fields = props.fields;

  

  const form = fields.map((field) => {
    switch (field.fieldType) {
      case 'select':
        return (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.title}</label>
            <select
              className={field.className}
              onChange={field.onChange}
              name={field.name}
            >
              <CategoryList></CategoryList>
            </select>
          </div>
        );

      default:
        return (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.title}</label>
            <div className="input-group">
              {field.name === 'price' ? (
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
              ) : null}
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={field.value}
                onChange={field.onChange}
                className={field.className}
              />
            </div>
            {!field.value && field.submitted && (
              <div className="invalid-feedback d-block">
                {field.title} is required
              </div>
            )}
          </div>
        );
    }
  });
  return form;
}
export default BuildForm;
