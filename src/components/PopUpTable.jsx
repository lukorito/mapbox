import React from "react";

function PopUpTable({ selectedLocation }) {
  const { properties } = selectedLocation;
  return (
    <div className="popup">
      <h1>{properties.Facility_Service_Name}</h1>
      <table className="popup-table">
        <tbody>
          <tr>
            <th>FACILITY/SERVICE TYPE:</th>
            <td>
              <span>
                {properties.Facility_Service_type || (
                  <span className="null-value">Not Set</span>
                )}
              </span>
            </td>
          </tr>
          <tr>
            <th>Broad category:</th>
            <td>
              <span>
                {properties.Broad_Category || (
                  <span className="null-value">Not Set</span>
                )}
              </span>
            </td>
          </tr>
          <tr>
            <th>BROAD CATEGORY:</th>
            <td>
              <span>
                {properties.Broad_Category || (
                  <span className="null-value">Not Set</span>
                )}
              </span>
            </td>
          </tr>
          <tr>
            <th>COUNTRY:</th>
            <td>
              <span>
                {properties.Country || (
                  <span className="null-value">Not Set</span>
                )}
              </span>
            </td>
          </tr>
          <tr>
            <th>CENTER:</th>
            <td>
              <span>
                {properties.Centre || (
                  <span className="null-value">Not Set</span>
                )}
              </span>
            </td>
          </tr>
          <tr>
            <th>FACILITY/SERVICE SHARED ACCROSS BORDER:</th>
            <td>
              <span>
                {properties.Facility_Service_shared_by_people || (
                  <span className="null-value">Not Set</span>
                )}
              </span>
            </td>
          </tr>
          <tr>
            <th>WHY FACILITY/SERVICE IS NOT SHARED ACROSS BORDER:</th>
            <td>
              <span>
                {properties.Facility_Service_not_shared_by_people_reason || (
                  <span className="null-value">Not Set</span>
                )}
              </span>
            </td>
          </tr>
          <tr>
            <th>PEOPLE SERVED AT FACILITY PER DAY:</th>
            <td>
              <span>
                {properties.People_served_at_Facility_Per_Day || (
                  <span className="null-value">Not Set</span>
                )}
              </span>
            </td>
          </tr>
          <tr>
            <th>CHALLENGE PRESENT WITH SHARING RESOURCE:</th>
            <td>
              <span>
                {properties.Challenges_facility_sharing_present || (
                  <span className="null-value">Not Set</span>
                )}
              </span>
            </td>
          </tr>
          <tr>
            <th>SPECIFIC CHALLENGE:</th>
            <td>
              <span>
                {properties.Challenge || (
                  <span className="null-value">Not Set</span>
                )}
              </span>
            </td>
          </tr>
          <tr>
            <th>ONGOING EFFORSTS TO SOLVE CHALLENGES:</th>
            <td>
              <span>
                {properties.Efforts_solutions_ongoing || (
                  <span className="null-value">Not Set</span>
                )}
              </span>
            </td>
          </tr>
          <tr>
            <th>DRIVER OF PEACE AT FACILITY:</th>
            <td>
              <span>
                {properties.Driver_of_peace || (
                  <span className="null-value">Not Set</span>
                )}
              </span>
            </td>
          </tr>
          <tr>
            <th>RECOMMENDATIONS:</th>
            <td>
              <span>
                {properties.Recommendations || (
                  <span className="null-value">Not Set</span>
                )}
              </span>
            </td>
          </tr>
          <tr>
            <th>BENEFIT OF FACILITY ACROSS BORDER:</th>
            <td>
              <span>
                {properties.Benefits_across_border || (
                  <span className="null-value">Not Set</span>
                )}
              </span>
            </td>
          </tr>
          <tr>
            <th>PHASE OF MAPPING:</th>
            <td>
              <span>
                {properties.Round_of_Mapping || (
                  <span className="null-value">Not Set</span>
                )}
              </span>
            </td>
          </tr>
          <tr>
            <th>ALTITUDE:</th>
            <td>
              <span>
                {properties.Altitude || (
                  <span className="null-value">Not Set</span>
                )}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PopUpTable;
