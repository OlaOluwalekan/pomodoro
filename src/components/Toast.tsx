import { useGlobalContext } from '../providers/store'

const Toast = () => {
  const { toastProps } = useGlobalContext()

  if (!toastProps.show) {
    return null
  }

  return (
    <div
      className={`text-sm w-fit min-w-[100px] max-w-[600px] px-3 py-2 rounded-md fixed top-2 z-40 ${toastProps.type === 'success' ? 'bg-green-600/15 text-green-600' : 'bg-red-500/15 text-red-500'}`}
    >
      <p className='text-wrap'>{toastProps.message}</p>
    </div>
  )
}

export default Toast
