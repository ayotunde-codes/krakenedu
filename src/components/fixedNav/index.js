import './styles.scss'
import { data, roadMap } from '../../data'
const FixedNav = () => {
  return (
    <>
      <div className="fixednav__container">
        <div className="top__block size1">
          <h2>Frontend Mentor</h2>
          <p>Feadback Board</p>
        </div>

        {/* mid block */}
        <div className="mid__block size1">
          <div className="mid__block__case">
            {data.map((item) => (
              <button key={item.id} className={item.className}>
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* botttom block */}
        <div className="bottom__block size1">
          <div className="bottom__block__case">
            <div className="title">
              <h3>Roadmap</h3>
              <a href="#fgg">View </a>
            </div>
            <div className="content">
              {roadMap.map((item) => (
                <div className="id__content" key={item.id}>
                  <div className="feedbacks">
                    <span className={item.className}></span>
                    <p>{item.name}</p>
                  </div>
                  <div className="value">
                    <h3>{item.value}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FixedNav
