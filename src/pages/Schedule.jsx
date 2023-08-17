/* import PlanningImg from '../img/planningZ.jpg'; */

function Schedule() {
  return (
    <section className="generalContainer">
      <div className="generalBackground scheduleBackground">
        <div className="smooth-show flex">
          <h2 className="section-title">Planning des cours</h2>
          {/* <img src={PlanningImg} alt="Z-team : planning des cours" title="Planning des cours" className="planning" /> */}
          <div className="flex-wrapper">
            <div className="scheduleContainer">
              <div className="scheduleGridContainer days">
                <h3 className="schedule-title-day emptySlot">Jour</h3>
                <h3 className="schedule-title-day">Lundi</h3>
                <h3 className="schedule-title-day">Mardi</h3>
                <h3 className="schedule-title-day">Mercredi</h3>
                <h3 className="schedule-title-day">Jeudi</h3>
                <h3 className="schedule-title-day">Vendredi</h3>
                <h3 className="schedule-title-day">Samedi</h3>
                <h3 className="schedule-title-day">Dimanche</h3>
              </div>
              <div
                className="scheduleGridContainer morning"
                style={{ display: 'none' }}
              >
                <div>
                  <h3 className="schedule-title-hour emptySlot">Heure</h3>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Lundi</h3>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Mardi</h3>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Mercredi</h3>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Jeudi</h3>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Vendredi</h3>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Samedi</h3>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Dimanche</h3>
                </div>
              </div>
              <div className="scheduleGridContainer midDay">
                <div>
                  <h3 className="schedule-title-hour vertical-text ">Midi</h3>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Lundi</h3>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Mardi</h3>
                </div>
                <div className="gridItem childs-background ">
                  <h3 className="schedule-title-hour">12H - 14H</h3>
                  <p>JJB / Enfants et ados</p>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Jeudi</h3>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Vendredi</h3>
                </div>
                <div className="gridItem bjj-background">
                  <h3 className="schedule-title-hour">12H - 14H</h3>
                  <p>Jiu-Jitsu Brésilien</p>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Dimanche</h3>
                </div>
              </div>
              <div className="scheduleGridContainer evening">
                <div>
                  <h3 className="schedule-title-hour vertical-text ">Soir</h3>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Lundi</h3>
                </div>
                <div className="gridItem bjj-background">
                  <h3 className="schedule-title-hour">20H - 22H</h3>
                  <p>Jiu-Jitsu Brésilien</p>
                </div>
                <div className="gridItem grappling-background">
                  <h3 className="schedule-title-hour">21H - 22H30</h3>
                  <p>Grappling</p>
                </div>
                <div className="gridItem bjj-background ">
                  <h3 className="schedule-title-hour">20H - 22H</h3>
                  <p>Jiu-Jitsu Brésilien</p>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Vendredi</h3>
                </div>
                <div className="gridItem mixte-background ">
                  <h3 className="schedule-title-hour">18H30-20H30</h3>
                  <p>Jiu-Jitsu Brésilien / Grappling</p>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Dimanche</h3>
                </div>
              </div>
            </div>
            <div>
              <p>TODO : horaires globaux + adress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
