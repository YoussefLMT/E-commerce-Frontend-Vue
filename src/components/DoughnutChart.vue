<template>
<canvas id="myChart" width="400" height="400"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';
import axiosInstance from '@/axios'
export default {
    data() {
        return {
                pendingOrdersCount: '',
                inProgressOrdersCount: '',
                shippingOrdersCount: '',
                shippedOrdersCount: ''
        }
    },
    mounted() {
        const ctx = document.getElementById('myChart');
        this.getOrdersStatistics()
        const data = {
            labels: [
                'pending orders',
                'inProgress orders',
                'shipping orders',
                'shipped orders'
            ],
            datasets: [{
                data: [30, 34, 34, this.shippingOrdersCount],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(44, 233, 35)'
                ],
                hoverOffset: 4
            }]
        };
        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
        });
        myChart
    },
    
}
</script>
