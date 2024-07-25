
import clsx from 'clsx'
import {FC} from 'react'
import {Link} from 'react-router-dom'
import {
  defaultAlerts,
  KTIcon,
  toAbsoluteUrl,
} from '../../../helpers'

const HeaderNotificationsMenu: FC = () => (
  <div
    className='menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px'
    data-kt-menu='true'
  >
    <div
      className='d-flex flex-column bgi-no-repeat rounded-top'
      style={{backgroundImage: `url('${toAbsoluteUrl('media/misc/menu-header-bg.jpg')}')`}}
    >
      <h3 className='text-white fw-bold px-9 mt-10 mb-6'>
        Notificaciones <span className='fs-8 opacity-75 ps-3'>24</span>
      </h3>

      <ul className='nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-bold px-9'>
        <li className='nav-item'>
          <a
            className='nav-link text-white opacity-75 opacity-state-100 pb-4'
            data-bs-toggle='tab'
            href='#kt_topbar_notifications_1'
          >
            Alertas
          </a>
        </li>


       
      </ul>
    </div>

    <div className='tab-content'>
      <div className='tab-pane fade' id='kt_topbar_notifications_1' role='tabpanel'>
        <div className='scroll-y mh-325px my-5 px-8'>
          {defaultAlerts.map((alert, index) => (
            <div key={`alert${index}`} className='d-flex flex-stack py-4'>
              <div className='d-flex align-items-center'>
                <div className='symbol symbol-35px me-4'>
                  <span className={clsx('symbol-label', `bg-light-${alert.state}`)}>
                    {' '}
                    <KTIcon iconName={alert.icon} className={`fs-2 text-${alert.state}`} />
                  </span>
                </div>

                <div className='mb-0 me-2'>
                  <a href='#' className='fs-6 text-gray-800 text-hover-primary fw-bolder'>
                    {alert.title}
                  </a>
                  <div className='text-gray-500 fs-7'>{alert.description}</div>
                </div>
              </div>

              <span className='badge badge-light fs-8'>{alert.time}</span>
            </div>
          ))}
        </div>

        <div className='py-3 text-center border-top'>
          <Link
            to='/crafted/pages/profile'
            className='btn btn-color-gray-600 btn-active-color-primary'
          >
            Ver todas<KTIcon iconName='arrow-right' className='fs-5' />
          </Link>
        </div>
      </div>


 
    </div>
  </div>
)

export {HeaderNotificationsMenu}
