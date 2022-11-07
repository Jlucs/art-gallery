// import { Dialog, Transition } from '@headlessui/react'
// import { Fragment, useState, forwardRef  } from 'react'
// import Link from 'next/link'


// export default function PhoneMenu() {

//   const NextLink = forwardRef((props, ref) => {
//     let { href, children, ...rest } = props
//     return (
//       <Link href={href}>
//         <a ref={ref} {...rest}>
//           {children}
//         </a>
//       </Link>
//     )
//   })

//   let [isOpen, setIsOpen] = useState(false)

//   function closeModal() {g
//     setIsOpen(false)
//   }

//   function openModal() {
//     setIsOpen(true)
//   }

//   return (
//     <>
//     <div className="fixed inset-0 flex items-center justify-center">
//       <div className="guide-wrapper" onClick={openModal}>
//         <div className="guide">
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//         </div>
//       </div>
//     </div>
//     <Transition show={isOpen} as={Fragment}>
//       <Dialog onClose={() => setIsOpen(false)}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-black/30 aside-overlay" />
//         </Transition.Child>

//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           <Dialog.Panel>
//             <div className="aside">
//               <div className="aside-logo">

//               </div>
//               <div className="menu menu-column menu-rounded menu-sub-indention px-3">
//                 <div className="menu-item">
//                   <NextLink href="/">
//                     <div className="menu-link">
//                       <span className="menu-icon"></span>
//                       <span className="menu-title">Dashboard</span>
//                     </div>
//                   </NextLink>
//                 </div>
//               </div>
//             </div>
//           </Dialog.Panel>
//         </Transition.Child>
//       </Dialog>
//     </Transition>
//     </>
//   )
// }
