import { useState } from "react";
import "../styles/Checklist.css";
import AppLayout from "../components/Layout/AppLayout";

const Checklist = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Passport Ready",
      completed: true,
    },
    {
      id: 2,
      title: "Bank Statement Uploaded",
      completed: true,
    },
    {
      id: 3,
      title: "Admission Letter Uploaded",
      completed: false,
    },
    {
      id: 4,
      title: "Medical Report Completed",
      completed: false,
    },
    {
      id: 5,
      title: "Visa Application Submitted",
      completed: false,
    },
    {
      id: 6,
      title: "Flight Booked",
      completed: false,
    },
    {
      id: 7,
      title: "Accommodation Confirmed",
      completed: false,
    },
    {
      id: 8,
      title: "Travel Insurance Purchased",
      completed: false,
    },
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const completedTasks =
    tasks.filter((task) => task.completed).length;

  const progress =
    Math.round(
      (completedTasks / tasks.length) * 100
    );

  return (
    <AppLayout>
      <main className="checklist-page">

      {/* HERO */}

      <section className="checklist-hero">

        <span className="checklist-tag">
          TRAVEL PREPARATION
        </span>

        <h1>Travel Checklist</h1>

        <p>
          Track every requirement and stay
          prepared for your journey.
        </p>

      </section>

      {/* PROGRESS */}

      <section className="progress-section">

        <div className="progress-card">

          <div className="progress-header">

            <div>
              <h2>Completion Progress</h2>
              <p>
                {completedTasks} of {tasks.length}
                tasks completed
              </p>
            </div>

            <h3>{progress}%</h3>

          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

        </div>

      </section>

      {/* CHECKLIST ITEMS */}

      <section className="tasks-section">

        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task-card ${
              task.completed
                ? "completed"
                : ""
            }`}
          >

            <div className="task-content">

              <input
                type="checkbox"
                checked={task.completed}
                onChange={() =>
                  toggleTask(task.id)
                }
              />

              <span>{task.title}</span>

            </div>

            <div className="task-status">

              {task.completed
                ? "Completed"
                : "Pending"}

            </div>

          </div>
        ))}

      </section>

      {/* AI INSIGHT */}

      <section className="checklist-insight">

        <div className="insight-card">

          <span>
            AI RECOMMENDATION
          </span>

          <h2>
            You're Making Great Progress
          </h2>

          <p>
            Completing your Admission Letter
            and Medical Report will increase
            your travel readiness score
            significantly.
          </p>

        </div>

      </section>

    </main>
    </AppLayout>
  );
};

export default Checklist;