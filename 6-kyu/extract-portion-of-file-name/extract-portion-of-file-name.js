class FileNameExtractor {
    static extractFileName(dirtyFileName) {
        const regex = /^\d+_(.+)\..+$/;
        const match = dirtyFileName.match(regex);
        return match ? match[1] : dirtyFileName;
    }
}