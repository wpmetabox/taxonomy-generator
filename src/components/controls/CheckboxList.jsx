import React from 'react';

const CheckboxList = ( {label, name, update, values} ) => {
	return (
		<div className="ctg-field">
			{label && <label className="ctg-label" htmlFor={name}>{label}</label>}
			<div className="ctg-input">
				<ul className="ctg-input-list">
					{values.map( (value, key) => <li key={key}><label className="ctg-description"><input type="checkbox" id={value.name} name={value.name} defaultChecked={value.checked} onChange={update} /> {value.description}</label></li> )}
				</ul>
			</div>
		</div>
	)
}

export default CheckboxList;