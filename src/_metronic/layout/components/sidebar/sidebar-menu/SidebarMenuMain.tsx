import {useIntl} from 'react-intl'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='element-11'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
    

      <SidebarMenuItemWithSub
        to='/crafted/accounts'
        title='Cuenta'
        icon='profile-circle'
        fontIcon='bi-person'
      >
        <SidebarMenuItem to='/crafted/account/overview' title='Perfil' hasBullet={true} />
        <SidebarMenuItem to='/crafted/account/settings' title='Configuracion' hasBullet={true} />
      </SidebarMenuItemWithSub>


      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to='/apps/chat'
        title='Social'
        fontIcon='bi-chat-left'
        icon='message-text-2'
      >
        <SidebarMenuItem to='/apps/chat/private-chat' title='Chat' hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/group-chat' title='Clubes' hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/drawer-chat' title='Comunidad' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItem
        to='/apps/user-management/users'
        icon='abstract-28'
        title='Amigos'
        fontIcon='bi-layers'
      />
           <SidebarMenuItem
        to=''
        icon='abstract-28'
        title='Grupos'
        fontIcon='bi-layers'
      />
  
    </>
  )
}

export {SidebarMenuMain}
