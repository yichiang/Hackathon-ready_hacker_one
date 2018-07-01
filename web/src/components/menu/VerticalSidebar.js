const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    className='menu_sidebar'
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
    vertical
    visible={visible}
    width='wide'
  >

    <Basket/>
  </Sidebar>
)

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}
