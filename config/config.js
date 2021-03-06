// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
    hash: true,
    antd: {},
    dva: {
        hmr: true,
    },
    locale: {
        // default zh-CN
        default: 'zh-CN',
        // default true, when it is true, will use `navigator.language` overwrite default
        antd: true,
        baseNavigator: true,
    },
    dynamicImport: {
        loading: '@/components/PageLoading/index',
    },
    targets: {
        ie: 11,
    },
    // umi routes: https://umijs.org/docs/routing
    routes: [
        {
            path: '/',
            component: '../layouts/BlankLayout',
            routes: [
                {
                    path: '/',
                    component: '../layouts/BasicLayout',
                    Routes: ['src/pages/Authorized'],
                    authority: ['admin', 'user'],
                    routes: [
                        {
                            path: '/',
                            redirect: '/pure_data',
                        },
                        {
                            name: 'query-list',
                            icon: 'smile',
                            path: '/pure_data',
                            component: './PureData',
                        },
                        {
                            name: 'manageList',
                            icon: 'smile',
                            path: '/manageList',
                            component: './manageList',
                        },
                        {
                            name: 'not-Found',
                            icon: 'smile',
                            path: './404',
                            component: './404',
                        },
                        {
                            component: '404',
                        },
                    ],
                },
            ],
        },
    ],
    // Theme for antd: https://ant.design/docs/react/customize-theme-cn
    theme: {
        // ...darkTheme,
        'primary-color': defaultSettings.primaryColor,
    },
    // @ts-ignore
    title: false,
    ignoreMomentLocale: true,
    proxy: proxy[REACT_APP_ENV || 'dev'],
    manifest: {
        basePath: '/',
    },
});
