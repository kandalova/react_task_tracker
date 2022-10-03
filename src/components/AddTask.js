import { useState } from "react"

const AddTask = ({ onAdd }) => {
	const [text, setText] = useState('');
	const [day, setDay] = useState('');
	const [reminder, setReminder] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();

		if(!text || ! day){
			alert('Please complit all fields');
		}

		onAdd({text, day, reminder});

		setDay('');
		setText('');
		setReminder(false);
	}

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Task</label>
				<input
					type='text'
					placeholder="Type task name"
					value={text}
					onChange={(e) => setText(e.target.value)} />
			</div>
			<div className="form-control">
				<label>Day and time</label>
				<input
					type='text'
					placeholder="Type day and time"
					value={day}
					onChange={(e) => setDay(e.target.value)} />
			</div>
			<div className="form-control form-control-check">
				<label>Reminder</label>
				<input
					type='checkbox'
					value={reminder}
					checked={reminder}
					onChange={(e) => setReminder(e.currentTarget.checked)} />
			</div>

			<input type='submit' value='Save task' className="btn btn-block" />
		</form>
	)
}

export default AddTask