import React from 'react';
import "./FilterCheckbox.css";

function FilterCheckbox ({isChecked, onSubmitCheckbox}) {
    return (
            <label className="filtercheckbox">
                <div className="filtercheckbox__container">
                    <input
                        className="filtercheckbox__input"
                        type="checkbox"
                        checked={isChecked}
                        onChange={onSubmitCheckbox}
                    />
                    <span className="filtercheckbox__tumb" />
                </div>
                <p className="filtercheckbox__text">Короткометражки</p>
            </label>
    )
}

export default FilterCheckbox;

{/* <label className="searchform-checkbox">
<div className="searchform-checkbox__container">
  <input className="searchform-checkbox__input" type="checkbox" />
  <span className="searchform-checkbox__tumb">{searchError.errorMessage}</span>
</div>
<p className="searchform-checkbox__text">Короткометражки</p>
</label> */}