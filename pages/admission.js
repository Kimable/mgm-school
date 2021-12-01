import React from "react";

function admission() {
  return (
    <div className="admission-content">
      <div className="header-sec">
        <div>
          <div className="headerLineCenter"></div>
          <h1>Admissions</h1>
        </div>
      </div>

      <div className="container">
        <div className="student-detail">
          <div className="form-style">
            <form>
              <fieldset>
                <legend>Student Details</legend>

                {/* --- First Name --- */}
                <label htmlFor="firstName">
                  <span>
                    First Name <span className="required">*</span>
                  </span>
                  <input type="text" className="input-field" name="firstName" />
                </label>

                {/* --- Middle Name --- */}
                <label htmlFor="middleName">
                  <span>Middle Name</span>
                  <input
                    type="text"
                    className="input-field"
                    name="middleName"
                  />
                </label>

                {/* --- Last Name --- */}
                <label htmlFor="lastName">
                  <span>
                    Last Name <span className="required">*</span>
                  </span>
                  <input type="text" className="input-field" name="lastName" />
                </label>

                {/* --- Date of Birth --- */}
                <label htmlFor="dob">
                  <span>
                    Date of Birth <span className="required">*</span>
                  </span>
                  <input type="date" className="input-field" name="dob" />
                </label>

                {/* --- Email --- */}
                <label htmlFor="email">
                  <span>
                    Email <span className="required">*</span>
                  </span>
                  <input type="email" className="input-field" name="email" />
                </label>

                {/* --- Phone --- */}
                <label htmlFor="phone">
                  <span>
                    Phone <span className="required">*</span>
                  </span>
                  <input type="text" className="input-field" name="phone" />
                </label>

                {/* class or Grade */}
                <label htmlFor="class">
                  <span>
                    Class/Grade <span className="required">*</span>
                  </span>
                  <select name="class" className="select-field">
                    <option>Form 1</option>
                    <option>Form 2</option>
                    <option>Form 3</option>
                    <option>Form 4</option>
                    <option>Grade 7</option>
                    <option>Grade 8</option>
                    <option>Grade 9</option>
                    <option>Grade 10</option>
                    <option>Grade 11</option>
                    <option>Grade 12</option>
                  </select>
                </label>
              </fieldset>

              <fieldset>
                <legend>Parent/Gurdian Details</legend>

                {/* --- First Name --- */}
                <label htmlFor="gurdianName">
                  <span>
                    Full Name <span className="required">*</span>
                  </span>
                  <input
                    type="text"
                    className="input-field"
                    name="gurdianName"
                  />
                </label>

                {/* --- Residence --- */}
                <label htmlFor="residence">
                  <span>
                    Residence <span className="required">*</span>
                  </span>
                  <input type="text" className="input-field" name="residence" />
                </label>

                {/* --- Email --- */}
                <label htmlFor="email">
                  <span>
                    Email <span className="required">*</span>
                  </span>
                  <input type="email" className="input-field" name="email" />
                </label>

                {/* --- Phone --- */}
                <label htmlFor="phone">
                  <span>
                    Phone <span className="required">*</span>
                  </span>
                  <input type="text" className="input-field" name="phone" />
                </label>
              </fieldset>

              <fieldset>
                <legend>Message</legend>
                <label htmlFor="field6">
                  <span>
                    Message <span className="required">*</span>
                  </span>
                  <textarea name="field6" className="textarea-field"></textarea>
                </label>
                <label>
                  <span> </span>
                  <input type="submit" value="submit application" />
                </label>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default admission;
