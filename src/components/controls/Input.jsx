import React from 'react';

const Input = ( {label, name, placeholder, defaultValue, update, description = '', required = false} ) => {
	return (
		<div className="ctg-field">
			<label className="ctg-label" htmlFor={name}>
				{label}
				{required && <span className="ctg-required">*</span>}
			</label>
			<div className="ctg-input">
				<input type="text" id={name} name={name} placeholder={placeholder} defaultValue={defaultValue} onChange={update} />
				{description && <div className="ctg-description">{description}</div>}
			</div>
		</div>
	)
}

export default Input;