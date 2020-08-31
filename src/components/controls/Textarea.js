import React from 'react';

const Textarea = ( {label, name, placeholder, update, description = '', required = false} ) => (
	<div className="ctg-field">
		<label className="ctg-label" htmlFor={name}>
			{label}
			{required && <span className="ctg-required">*</span>}
		</label>
		<div className="ctg-input">
			<textarea id={name} name={name} placeholder={placeholder} onChange={update} />
			{description && <div className="ctg-description">{description}</div>}
		</div>
	</div>
)

export default Textarea;