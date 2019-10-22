import VideoResponse from './views/VideoResponse.svelte';
import VA from './views/VA.svelte';
import VB from './views/VB.svelte';
import VC from './views/VC.svelte';
import VD from './views/VD.svelte';

const routes = [
	{
	    name: '/',
	    component: VideoResponse
	},
	{
	    name: '/va',
	    component: VA
	},
	{
	    name: '/vb',
	    component: VB
	},
	{
	    name: '/vc',
	    component: VC
	},
	{
	    name: '/vd',
	    component: VD
	}
];

export { routes };