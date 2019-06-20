<<<<<<< HEAD
//  get_current_thread_id.hpp  --------------------------------------------------------------//

//  Copyright 2010 Vicente J. Botet Escriba
//  Copyright 2015 Andrey Semashev

//  Distributed under the Boost Software License, Version 1.0.
//  See http://www.boost.org/LICENSE_1_0.txt


#ifndef BOOST_DETAIL_WINAPI_GET_CURRENT_THREAD_ID_HPP
#define BOOST_DETAIL_WINAPI_GET_CURRENT_THREAD_ID_HPP

#include <boost/detail/winapi/basic_types.hpp>

#ifdef BOOST_HAS_PRAGMA_ONCE
#pragma once
#endif

// Windows CE define GetCurrentThreadId as an inline function in kfuncs.h
#if !defined( BOOST_USE_WINDOWS_H ) && !defined( UNDER_CE )
extern "C" {
BOOST_SYMBOL_IMPORT boost::detail::winapi::DWORD_ WINAPI GetCurrentThreadId(BOOST_DETAIL_WINAPI_VOID);
}
#endif

namespace boost {
namespace detail {
namespace winapi {
using ::GetCurrentThreadId;
}
}
}

#endif // BOOST_DETAIL_WINAPI_GET_CURRENT_THREAD_ID_HPP
=======
//  get_current_thread_id.hpp  --------------------------------------------------------------//

//  Copyright 2010 Vicente J. Botet Escriba
//  Copyright 2015 Andrey Semashev

//  Distributed under the Boost Software License, Version 1.0.
//  See http://www.boost.org/LICENSE_1_0.txt


#ifndef BOOST_DETAIL_WINAPI_GET_CURRENT_THREAD_ID_HPP
#define BOOST_DETAIL_WINAPI_GET_CURRENT_THREAD_ID_HPP

#include <boost/detail/winapi/basic_types.hpp>

#ifdef BOOST_HAS_PRAGMA_ONCE
#pragma once
#endif

// Windows CE define GetCurrentThreadId as an inline function in kfuncs.h
#if !defined( BOOST_USE_WINDOWS_H ) && !defined( UNDER_CE )
extern "C" {
BOOST_SYMBOL_IMPORT boost::detail::winapi::DWORD_ WINAPI GetCurrentThreadId(BOOST_DETAIL_WINAPI_VOID);
}
#endif

namespace boost {
namespace detail {
namespace winapi {
using ::GetCurrentThreadId;
}
}
}

#endif // BOOST_DETAIL_WINAPI_GET_CURRENT_THREAD_ID_HPP
>>>>>>> Jona
