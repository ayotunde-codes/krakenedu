import { AddOutline } from 'react-ionicons'
import { ChevronDownOutline } from 'react-ionicons'
import { ChevronUpOutline } from 'react-ionicons'
import { BulbOutline } from 'react-ionicons'
import { Chatbubble } from 'react-ionicons'
import './styles.scss'
import { feedData } from '../../data'
const MainBody = () => {
  return (
    <>
      <div className="mainbody__container">
        {/* top nav */}
        <div className="mainbody__nav">
          <div className="nav__case">
            <div className="nav__textcase">
              <div className="icon">
                <BulbOutline color={'#ffffff'} height="23px" width="23px" />
              </div>
              <div className="suggestion">6 Suggestion</div>
              <div className="sortby">
                <h5>Sort by : </h5>
                <h4>Most Updates</h4>
                <div className="down">
                  <ChevronDownOutline
                    color={'#ffffff'}
                    height="15px"
                    width="15px"
                  />
                </div>
              </div>
            </div>
            <button>
              <AddOutline color={'#00000'} beat height="22px" width="22px" />
              Add Feedback
            </button>
          </div>
        </div>
        {/* dynamic data */}
        <div className="mainbody__content">
          {feedData.map((item) => (
            <div className="content__case" key={item.id}>
              <div className="content__wrapper">
                <div className="number">
                  <div className="num__case">
                    <ChevronUpOutline
                      color={'#00000'}
                      height="20px"
                      width="20px"
                    />
                    <p>{item.nums}</p>
                  </div>
                </div>
                <div className="text__btn">
                  <div className="text">
                    <h2>{item.title}</h2>
                    <p>{item.subtitle}</p>
                  </div>
                  <button>{item.cta}</button>
                </div>
              </div>
              <div className="comment">
                <Chatbubble color={'#E5E5E5'} height="20px" width="20px" />
                <h3>{item.comments}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MainBody
