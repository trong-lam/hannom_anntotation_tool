import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Label from './Label'
import {FaEdit, FaTrash } from 'react-icons/fa'

function BoxEdit(props) {
  const {
		box,
		label,
		parrentCallback
	} = props

	const [isSave, setIsSave] = useState(false)
	const [isEdit, setEdit] = useState(false)
	const [newLabel, setNewLabel] = useState()

	const toggleEditMode = (e) => {
		setEdit(!isEdit)
	}

	const handleSave = (e) => {
		setEdit(!isEdit)
	}

	const handleTrashIconClick = (e) => {}
	
	const onLabelChange = (e) => {
		setNewLabel(e.target.value)
		const newBox = {
			label: newLabel,
			x_min: box.x_min,
			x_max: box.x_max,
			y_min: box.y_min,
			y_max: box.y_max
		}
		parrentCallback(newBox)
	}

  return (
		<div >
			<span className="box-label-first">Nhãn </span>
			<input type="text" 
			name="label" 
			defaultValue={box.label} 
			style={{fontSize: 20, width: "50px", height: "50px"}}
			onChange={onLabelChange}
			/>
			<button
				className="circular button"
				onClick={toggleEditMode}
			>
				<FaEdit />
			</button>
			<button
				className="circular button"
				onClick={handleTrashIconClick}
			>
				<FaTrash />
			/</button>
			{isEdit ?  (
				<button
				className="circular primary button"
				onClick={handleSave}
				>
					Lưu
				</button>
			) : null}
	</div>

  )
}

BoxEdit.propTypes = {
	box: PropTypes.object.isRequired,
	label: PropTypes.string.isRequired,
	parrentCallback: PropTypes.func.isRequired
}

export default BoxEdit
