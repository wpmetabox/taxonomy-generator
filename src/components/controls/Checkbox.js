import React from 'react';

const Checkbox = ( {label, name, description, update, checked} ) => {
	return (
		<div className="ctg-field">
			{label && <label className="ctg-label" htmlFor={name}>{label}</label>}
			<div className="ctg-input">
				{
					description
					? <label className="ctg-description"><input type="checkbox" id={name} name={name} defaultChecked={checked} onChange={update} /> {description}</label>
					: <input type="checkbox" id={name} name={name} defaultChecked={checked} onChange={update} />
				}
			</div>
		</div>
	)
}

export default Checkbox;