import React from 'react';

const Radio = ( {label, name, update, values, defaultValue} ) => {
	return (
		<div className="ctg-field ctg-field--radio">
			<label className="ctg-label">{label}</label>
			<div className="ctg-input">
				{
					values.map( ( item, key ) => (
						<label key={key} className={`ctg-choice${item.icon ? ' ctg-icon' : ''}`}>
							<input type="radio" name={name} value={item.value} defaultChecked={item.value === defaultValue && "checked" } onChange={update} />
							{item.icon && <i className={item.icon + " wp-menu-image dashicons-before"}></i>}
							{item.label}
						</label>
					) )
				}
			</div>
		</div>
	)
}

export default Radio;