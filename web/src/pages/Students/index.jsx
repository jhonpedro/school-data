import React, { useEffect, useState } from 'react'
import axios from '../../services/axios'

import Header from '../../components/Header'
import Student from '../../components/Student'

import { StudentsContainer } from './styles'
import Loading from '../../components/Loading'

function StudentsComponent() {
	const [students, setStudents] = useState()
	const [isLoadding, setIsLoadding] = useState(true)
	useEffect(() => {
		axios.get('/students').then((studentsFromDB) => {
			setStudents(studentsFromDB.data)
			setIsLoadding(false)
		})
	}, [])
	return (
		<>
			<Loading isLoadding={isLoadding} />
			<Header showLogout />
			<StudentsContainer>
				{students &&
					students.map((student) => {
						const photo =
							student.Students_photos[0] && student.Students_photos[0].link
						return (
							<Student
								key={student.id}
								id={student.id}
								name={student.name}
								lastName={student.last_name}
								email={student.email}
								age={student.age}
								photo={photo}
							/>
						)
					})}
			</StudentsContainer>
		</>
	)
}

export default StudentsComponent
