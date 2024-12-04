import React from "react";
import { Timeline } from "flowbite-react";
import { Spinner } from "flowbite-react";

function TimeLineProject() {
  return (
    <div>
      <Timeline>
        {/* Timeline Item 1 */}
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>Nov 2024</Timeline.Time>
            <Timeline.Title>Application UI in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              This project is designed using Tailwind CSS. It is a multi-page
              blog-site with advanced features, including an upgrade to pro
              membership and a "cult" feature where users and bloggers can
              communicate. Routing for pages is implemented using
              `react-router-dom`.
            </Timeline.Body>
            {/* <Button color="gray">
          Learn More
          <HiArrowNarrowRight className="ml-2 h-3 w-3" />
        </Button> */}
          </Timeline.Content>
        </Timeline.Item>

        {/* Timeline Item 2 */}
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>Dec 2024</Timeline.Time>
            <Timeline.Title>State Management</Timeline.Title>
            <Timeline.Body>
              State management is handled using Redux Toolkit. Authentication
              functionality has been added, along with an admin dashboard where
              the admin can block users, send warnings, and perform other tasks.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        {/* Timeline Item 3 */}
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>Dec 2024</Timeline.Time>
            <Timeline.Title>
              Backend{" "}
              <p>
                in progress{" "}
                <Spinner color="success" aria-label="Success spinner example" />
              </p>
            </Timeline.Title>
            <Timeline.Body>
              The backend is built using Node.js and Express. We have created
              RESTful APIs and implemented JWT (JSON Web Token) for
              authentication and bcrypt for password hashing.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export default TimeLineProject;
