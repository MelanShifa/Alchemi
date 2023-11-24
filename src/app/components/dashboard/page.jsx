"use client"
import React, { useState, useEffect } from 'react';
import styles from '../Ui/dashboard/dashboard.module.css'; // Ensure you have a corresponding CSS module file
import { useRouter } from 'next/navigation';



const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [newCourse, setNewCourse] = useState({ title: '', imageUrl: '' });
  const router = useRouter();

  const handleAddCourse = () => {
    
    router.push('/components/addCourse'); // Replace with actual path
  };

  const handleCourseChange = (event) => {
    const { name, value } = event.target;
    setNewCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/getUserCourses'); // Replace with your API endpoint
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
        // Handle error here
      }
    };

    fetchCourses();
  }, []);

  const handleStartTutor = async (courseTitle) => {
    try {
      // Fetch user data
      const userResponse = await fetch('/api/getUser');
      const userData = await userResponse.json();

      // Fetch course data
      const courseResponse = await fetch('/api/getUserCourses');
      const coursesData = await courseResponse.json();

      // Select the course based on title
      const selectedCourse = coursesData.find(course => course.title === courseTitle);

      // Send data to Python backend
      await fetch('http://localhost:5000/user-data', { // Replace with your Python server URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_info: userData,
          course_info: selectedCourse,
        }),
      });

      // Redirect or notify the user
      console.log('AI tutor started for course:', courseTitle);
    } catch (error) {
      console.error('Error starting AI tutor:', error);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.dashboard}>
          {courses?.map((course) => (
            <div key={course._id} className={styles.card} onClick={() => handleStartTutor(course.title)}>
              <img src={"course.imageUrl"} alt={course.title} className={styles.cardImage} />
              <h3 className={styles.cardTitle}>{course.Title}</h3>
            </div>
          ))}

          {/* Fixed 'Add Course' button */}
          <div className={styles.addCourseButton} onClick={handleAddCourse}>
            <div className={styles.plusIcon}>+</div>
            <div className={styles.addCourseText}>Add Courses</div>
          </div>
        </div>

        {/* Add Course modal */}
        {showAddCourse && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h2>Add a New Course</h2>
              <input
                type="text"
                name="title"
                placeholder="Course Title"
                value={newCourse.title}
                onChange={handleCourseChange}
              />
              <input
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                value={newCourse.imageUrl}
                onChange={handleCourseChange}
              />
              <button onClick={handleAddCourse}>Submit</button>
              <button onClick={() => setShowAddCourse(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
