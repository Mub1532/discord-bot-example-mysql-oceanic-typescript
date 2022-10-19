import { readdirSync, statSync } from 'fs';

export default function getFiles(dir: string, files_?: Array<any>) {
    files_ = files_ || [];
    const files = readdirSync(dir);
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const i in files) {
        const name = `${dir}/${files[i]}`;
        if (statSync(name).isDirectory()) {
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
}
