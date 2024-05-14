import {NextRequest, NextResponse } from 'next/server';
import {NextPage } from 'next';
import axios, { AxiosError, AxiosResponse } from 'axios';
import {apiCardReaders} from '@/app/_data/data';
import mysql from 'mysql2/promise' 
const https = require('https');

const httpsAgent = new https.Agent({
    rejectUnauthorized: false
});

export async function GET(req: NextRequest, res: NextResponse) {

    try {
        const pool = mysql.createPool({
            host: '172.24.100.199',
            user: 'test',
            database: 'zabbix',
            password: 'n0c123#',
            waitForConnections: true,
            connectionLimit: 5,
            maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
            idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
            queueLimit: 0,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0,
          });
      
        // execute will internally call prepare and query
        const [results, fields] = await pool.execute(
          `SELECT a.hostid, a.host, a.name, f.ip, b.itemid, b.key_, c.triggerid, d.status, d.value FROM hosts a
          JOIN items b ON a.hostid=b.hostid
          JOIN functions c ON b.itemid=c.itemid
          JOIN triggers d ON c.triggerid=d.triggerid
          join hosts_groups e on a.hostid=e.hostid
          join interface f on a.hostid=f.hostid
          WHERE b.key_='icmpping' and f.type=1 and e.groupid=34 and a.status=0 -- and d.triggerid in
          ORDER BY a.hostid;`
        );
        pool.end();
        return NextResponse.json(results, {status: 200})
      } catch (err:any) {
        console.log(err.sqlMessage);
        return NextResponse.json(err, {status: 404})
      }
}

